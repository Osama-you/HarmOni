import { CustomPointer } from '../components/CustomPointer';
import { NavigationProvider } from '../contexts/NavigationContext';
import Layout from '../layout';
import ActiveTabRenderer from '../navigation/ActiveTabRenderer';

/**
 * Main application component that sets up context providers,
 * layout, and active tab rendering.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  return (
    <div>
      {/* Custom pointer component to provide enhanced cursor functionality */}
      <CustomPointer />

      {/* NavigationProvider to manage and provide navigation state throughout the app */}
      <NavigationProvider>
        <Layout>
          {/* Renders the currently active tab based on the navigation context */}
          <ActiveTabRenderer />
        </Layout>
      </NavigationProvider>
    </div>
  );
}
