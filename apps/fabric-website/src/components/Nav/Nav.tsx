import * as React from 'react';

import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { List } from 'office-ui-fabric-react/lib/List';
import { Link } from 'office-ui-fabric-react/lib/Link';
import {
  CollapsibleSection,
  CollapsibleSectionTitle,
  ICollapsibleSectionTitleStyleProps,
  ICollapsibleSectionTitleStyles
} from '@uifabric/experiments';

import { getPathMinusLastHash } from '../../utilities/pageroute';
import * as stylesImport from './Nav.module.scss';
const styles: any = stylesImport;
import { INavProps, INavPage } from './Nav.types';
import { css } from 'office-ui-fabric-react/lib/Utilities';

export interface INavState {
  searchQuery: string;
  defaultFilterState: boolean;
  filterState: boolean;
  isCalloutVisible: boolean;
}

const searchBoxStyles = {
  root: {
    marginBottom: '5px',
    width: '152px',
    backgroundColor: 'transparent'
  },
  iconContainer: {
    display: 'none'
  },
  field: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  clearButton: {
    selectors: {
      '.ms-Button': {
        color: 'white'
      }
    }
  }
};

export class Nav extends React.Component<INavProps, INavState> {
  private _searchBoxElement: HTMLElement | null;

  constructor(props: INavProps) {
    super(props);

    this.state = {
      searchQuery: '',
      defaultFilterState: true,
      filterState: true,
      isCalloutVisible: false
    };
  }

  public render(): JSX.Element {
    let { pages } = this.props;

    if (!pages) {
      return null;
    }

    const links = pages ? this._renderLinkList(pages, false) : null;

    return (
      <FocusZone>
        <nav className={styles.nav} role="navigation">
          {links}
        </nav>
      </FocusZone>
    );
  }

  private _renderLinkList(pages: INavPage[], isSubMenu: boolean): React.ReactElement<{}> {
    const { filterState } = this.state;

    const links = pages
      .filter(page => !page.hasOwnProperty('isHiddenFromMainNav'))
      .map((page: INavPage, linkIndex: number) => {
        if (page.isCategory && !filterState) {
          return (
            <span>
              {page.pages.map((innerPage: INavPage, innerLinkIndex) => this._renderLink(innerPage, innerLinkIndex))}
            </span>
          );
        }
        return page.isCategory && filterState
          ? this._renderCategory(page, linkIndex)
          : this._renderLink(page, linkIndex);
      });

    return (
      <ul className={css(styles.links, isSubMenu ? styles.isSubMenu : '')} aria-label="Main website navigation">
        {links}
      </ul>
    );
  }

  private _renderCategory(page: INavPage, categoryIndex: number): React.ReactElement<{}> {
    if (page.isCategory && page.pages) {
      return (
        <span key={categoryIndex} className={css(styles.category, _hasActiveChild(page) && styles.hasActiveChild)}>
          <CollapsibleSection
            titleAs={CollapsibleSectionTitle}
            titleProps={{ text: page.title, styles: getTitleStyles }}
            styles={{ body: [{ marginLeft: '28px' }] }}
            defaultCollapsed={!_hasActiveChild(page)}
          >
            {page.pages.map((innerPage: INavPage, indexNumber: number) => this._renderLink(innerPage, indexNumber))}
          </CollapsibleSection>
        </span>
      );
    }
  }

  private _renderSortedLinks(pages: INavPage[]): React.ReactElement<{}> {
    const links: INavPage[] = [];
    pages.map((page: INavPage) => page.pages.map((link: INavPage) => links.push(link)));
    links.sort((l1, l2) => {
      if (l1.title > l2.title) {
        return 1;
      } else if (l1.title < l2.title) {
        return -1;
      }
      return 0;
    });

    return this._renderLinkList(links, true);
  }

  private _renderLink(page: INavPage, linkIndex: number): React.ReactElement<{}> {
    const ariaLabel = page.pages ? 'Hit enter to open sub menu, tab to access sub menu items.' : '';
    const title = page.title === 'Fabric' ? 'Home page' : page.title;
    const childLinks =
      page.pages && title === 'Components' && !this.state.filterState
        ? this._renderSortedLinks(page.pages)
        : page.pages
          ? this._renderLinkList(page.pages, true)
          : null;
    const text = page.title;

    return (
      <span>
        {this._getSearchBox(title)}
        <li
          className={css(
            styles.link,
            _isPageActive(page) ? styles.isActive : '',
            _hasActiveChild(page) ? styles.hasActiveChild : '',
            page.isHomePage ? styles.isHomePage : '',
            page.className ? styles[page.className] : ''
          )}
          key={linkIndex}
        >
          {!(page.isUhfLink && location.hostname !== 'localhost') && (
            <a href={page.url} onClick={this._onLinkClick} title={title} aria-label={ariaLabel}>
              {text}
            </a>
          )}
          {childLinks}
        </li>
      </span>
    );
  }

  private _getSearchBox(val) {
    if (val === 'Components') {
      const { searchQuery, isCalloutVisible } = this.state;

      const data: INavPage[] = [];
      this.props.pages
        .filter(page => page.title === 'Components')
        .map((page: INavPage) =>
          page.pages.map((links: INavPage) =>
            links.pages
              .filter(link => link.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
              .map((link: INavPage) => data.push(link))
          )
        );
      data.sort((l1, l2) => {
        if (l1.title > l2.title) {
          return 1;
        } else if (l1.title < l2.title) {
          return -1;
        }
        return 0;
      });

      return (
        <span>
          <div style={{ display: 'flex' }} ref={searchBox => (this._searchBoxElement = searchBox)}>
            <SearchBox
              placeholder="Filter Components"
              underlined={true}
              styles={searchBoxStyles}
              onChange={this._onChangeQuery.bind(this)}
            />
            <IconButton
              iconProps={{ iconName: 'filter' }}
              style={{ color: 'white', marginLeft: '5px' }}
              menuIconProps={{ iconName: '' }}
              menuProps={{
                items: [
                  {
                    key: 'categories',
                    text: 'Categories',
                    iconProps: { iconName: 'org' },
                    onClick: this._setCategories.bind(this)
                  },
                  {
                    key: 'alphabetized',
                    text: 'A to Z',
                    iconProps: { iconName: 'Ascending' },
                    onClick: this._setAlphabetized.bind(this)
                  }
                ]
              }}
            />
          </div>
          {isCalloutVisible ? (
            <Callout hidden={false} target={this._searchBoxElement} isBeakVisible={false} gapSpace={-2}>
              <div daata-is-scrollable={true}>
                <hr />
                <List
                  style={{ maxHeight: '500px', maxWidth: '1000px' }}
                  items={data}
                  onRenderCell={this._onRenderCell.bind(this)}
                />
              </div>
            </Callout>
          ) : null}
        </span>
      );
    }
  }

  private _onRenderCell(item: INavPage, index: number, isScrolling: boolean) {
    const { searchQuery } = this.state;
    const matchIndex = item.title.toLowerCase().indexOf(searchQuery.toLowerCase());
    const text = item.title;
    let linkText = <>{text}</>;
    let overview;

    try {
      overview = require<string>('!raw-loader!office-ui-fabric-react/src/components/' +
        text +
        '/docs/' +
        text +
        'Overview.md');
    } catch (Error) {
      overview = 'Sorry this is broken :(';
    }

    overview = overview.substring(0, overview.indexOf('\n') > -1 ? overview.indexOf('\n') : overview.length);

    if (overview.indexOf('<a') > -1) {
      const beforeLink = overview.indexOf('<a');
      const afterLink = overview.indexOf('</a>') + 4;

      overview = (
        <span style={{ display: 'flex' }}>
          <p>
            {overview.substring(0, beforeLink)}
            <a href={overview.substring(overview.indexOf("href='") + 6, overview.indexOf("'>"))}>
              {overview.substring(overview.indexOf('>') + 1, afterLink - 4)}
            </a>
            {overview.substring(afterLink, overview.length)}
          </p>
        </span>
      );
    }

    if (matchIndex >= 0) {
      const before = text.slice(0, matchIndex);
      const match = text.slice(matchIndex, matchIndex + searchQuery.length);
      const after = text.slice(matchIndex + searchQuery.length);
      const highlightMatch = <span className={styles.matchesFilter}>{match}</span>;
      linkText = (
        <>
          {before}
          {highlightMatch}
          {after}
        </>
      );
    }

    let example;
    try {
      let {
        ButtonDefaultExample
      } = require('office-ui-fabric-react/src/components/Button/examples/Button.Default.Example');
      example = <ButtonDefaultExample />;
    } catch (error) {
      example = null;
    }

    return (
      <div data-is-focusable={true}>
        <span style={{ display: 'flex' }}>
          <div style={{ marginLeft: '4px', width: '150px' }}>
            <Link style={{ color: 'black', fontSize: '15px', marginLeft: '4px' }} href={item.url}>
              {linkText}
            </Link>
          </div>
          <div style={{ marginLeft: '10px', width: '500px' }}>{overview}</div>
          <div style={{ marginLeft: '10px', marginRight: '4px' }}>
            {example ? (
              example
            ) : (
              <span>
                <p>Coming soon... :)</p>
                <img
                  src="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif"
                  style={{ width: '120px', height: '120px' }}
                  alt="gif is also broken :("
                />
              </span>
            )}
          </div>
        </span>
        <hr />
      </div>
    );
  }

  private _onLinkClick = (ev: React.MouseEvent<{}>) => {
    if (this.props.onLinkClick) {
      return this.props.onLinkClick(ev);
    }
    this.setState({
      searchQuery: ''
    });
  };

  private _hideCallout() {
    this.setState({
      isCalloutVisible: false
    });
  }

  private _onChangeQuery(newValue): void {
    this.setState({
      searchQuery: newValue,
      isCalloutVisible: true
    });
    if (newValue === '') {
      this.setState({
        isCalloutVisible: false
      });
    }
  }

  private _setCategories(): void {
    this.setState({
      defaultFilterState: true,
      filterState: true
    });
  }

  private _setAlphabetized(): void {
    this.setState({
      defaultFilterState: false,
      filterState: false
    });
  }
}

// A tag used for resolving links.
const _urlResolver = document.createElement('a');

function _isPageActive(page: INavPage): boolean {
  if (!page.url) {
    return false;
  }
  _urlResolver.href = page.url || '';
  const target: string = _urlResolver.href;
  let path = location.href;

  if (location.protocol + '//' + location.host + location.pathname === target) {
    return true;
  }

  const hashCount = path.split('#').length - 1;
  if (hashCount > 1) {
    path = getPathMinusLastHash(path);
  }

  if (path === target) {
    return true;
  }

  return false;
}

function _hasActiveChild(page: INavPage): boolean {
  let hasActiveChild: boolean = false;

  if (page.pages) {
    page.pages.forEach(childPage => {
      if (_isPageActive(childPage)) {
        hasActiveChild = true;
      }

      // Is a grandchild page active?
      // @todo: This logic is the same as above. Could be simplified by moving
      //        into another function, which would support many levels of nav.
      if (childPage.pages) {
        childPage.pages.forEach(grandchildPage => {
          if (_isPageActive(grandchildPage)) {
            hasActiveChild = true;
          }
        });
      }
    });
  }

  return hasActiveChild;
}

function getTitleStyles(props: ICollapsibleSectionTitleStyleProps): Partial<ICollapsibleSectionTitleStyles> {
  const { theme } = props;
  return {
    root: [
      {
        color: theme.palette.neutralQuaternaryAlt,
        marginBottom: '8px',
        selectors: {
          ':hover': {
            background: theme.palette.neutralPrimary,
            cursor: 'pointer'
          }
        }
      }
    ],
    text: theme.fonts.medium
  };
}
