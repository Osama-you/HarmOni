import './style.css';

import clsx from 'classnames';

import { useNavigation } from '../../contexts/NavigationContext';
import { navigationConfig } from '../../navigation';
import { navigationMenuClasses } from './navigationMenuClasses';

/**
 * NavigationMenu component renders a list of selectable menu items.
 * Each item is clickable and can be navigated via keyboard (Enter key).
 *
 * @component
 * @returns {JSX.Element} The rendered navigation menu component.
 */
function NavigationMenu(): JSX.Element {
  const { currentTab, setCurrentTab } = useNavigation();

  /**
   * Handles the click event when a navigation item is selected.
   *
   * @param {string} key - The unique key of the selected item.
   */
  const handleItemSelect = (key: string) => {
    setCurrentTab(key); // Update the current tab in the navigation context
  };

  // Dynamically generate menu items from the navigationConfig
  const menuItems = Object.keys(navigationConfig)
    .filter((key) => key !== 'notFound') // Exclude non-navigable items
    .map((key) => ({
      key,
      label: navigationConfig[key].label || 'Unnamed Item',
      icon: navigationConfig[key].icon, // Use the icon from the config
    }));

  return (
    <nav className={navigationMenuClasses.nav}>
      <div className={navigationMenuClasses.content}>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={clsx(navigationMenuClasses.item, {
              [navigationMenuClasses.isActive]: item.key === currentTab, // Conditionally apply active class
            })}
            onClick={() => handleItemSelect(item.key)} // Handle click event
            aria-label={item.label}
            role="button"
            tabIndex={0} // Make the item focusable for keyboard navigation
            onKeyDown={(e) => e.key === 'Enter' && handleItemSelect(item.key)} // Handle Enter key for selection
          >
            <div className="icon-container">{item.icon}</div>
            <span className="no-wrap-text">{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavigationMenu;
