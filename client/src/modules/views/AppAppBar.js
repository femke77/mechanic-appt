import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Auth from '../../utils/Auth';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {

  const isLoggedIn = Auth.loggedIn();

  const handleLogout = () => {
    Auth.logout();
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'carpointment'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {isLoggedIn ? (
              <>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  href="/profile"
                  sx={rightLink}
                >
                  {'Profile'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  onClick={handleLogout}
                  sx={rightLink}
                >
                  {'Sign Out'}
                </Link>
              </>
            ) : (
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/signin"
                sx={rightLink}
              >
                {'Sign In'}
              </Link>
            )}
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
