import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  icon: string;
  disabled?: boolean;
}

function Navigation() {
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { path: '/search', label: 'Evaluate', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', disabled: true },
    { path: '/saved', label: 'Saved', icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z', disabled: true },
    { path: '/profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', disabled: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-cream border-t border-charcoal/20 md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item: NavItem) => {
          const isActive: boolean = location.pathname === item.path;

          if (item.disabled) {
            return (
              <div
                key={item.path}
                className="flex flex-col items-center py-2 px-4 text-charcoal/30"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex flex-col items-center py-2 px-4 transition-colors
                ${isActive
                  ? 'text-sage'
                  : 'text-charcoal/60 hover:text-charcoal'
                }
              `}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
