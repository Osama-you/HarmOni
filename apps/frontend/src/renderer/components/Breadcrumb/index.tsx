import './style.css';

import React, { useMemo } from 'react';

import { useNavigation } from '../../contexts/NavigationContext';
import { navigationConfig } from '../../navigation';

/**
 * Breadcrumb component that displays the current navigation path
 * based on the active tab from the navigation context.
 *
 * @component
 * @returns {JSX.Element} The rendered breadcrumb navigation.
 */
function Breadcrumb() {
  const { currentTab } = useNavigation();

  // Memoize the breadcrumb items to avoid unnecessary recalculations
  const breadcrumbItems = useMemo(
    () => [
      { label: 'Home' },
      { label: navigationConfig[currentTab]?.label, active: true },
    ],
    [currentTab],
  );

  return (
    <div className="breadcrumb">
      <div className="icon-container">
        <span className="icon">{navigationConfig[currentTab]?.icon}</span>
      </div>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <span className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
            {item.label}
          </span>
          {index < breadcrumbItems.length - 1 && (
            <span className="separator">&#8250;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumb;
