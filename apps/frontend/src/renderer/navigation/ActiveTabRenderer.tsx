import { useNavigation } from '../contexts/NavigationContext';
import { navigationConfig } from '.';

/**
 * Renders the component corresponding to the current active tab
 * based on the navigation context.
 *
 * @component
 * @returns {React.ComponentType} The component associated with the current tab.
 */
function ActiveTabRenderer() {
  // Retrieve the currently selected tab from the navigation context
  const { currentTab } = useNavigation();

  // Get the corresponding component from the navigation configuration
  const { component: ActiveComponent } = navigationConfig[currentTab];

  return ActiveComponent; // Render the active component for the current tab
}

export default ActiveTabRenderer;
