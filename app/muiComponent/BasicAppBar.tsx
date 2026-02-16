"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Avatar, ListItemIcon, ListItemText, Divider } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

import { globalState } from "../app/store";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

export default function ButtonAppBar() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { isLoggedIn, toggleSidebar, toggleLogin, user } = globalState(
    (state) => state,
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", { method: "POST" });
    const data = await response.json();
    handleClose();
    toggleLogin(false);
    router.replace("/login");
    toast.success("Logout Successfully");
  };

  if (!mounted) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image
              src="/images/favicon.png"
              width={15}
              height={10}
              alt="logo"
            />
            <Link href="/">Next Blog</Link>
          </Typography>

          <div className="hidden sm:flex items-center">
            <Link href="/" aria-label="home">
              <Button
                color="inherit"
                sx={{
                  display: { xs: "none", sm: "block" },
                  textTransform: "none",
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/blog" aria-label="blog">
              <Button
                variant="text"
                color="inherit"
                sx={{
                  display: { xs: "none", sm: "block" },
                  textTransform: "none",
                }}
              >
                Blog
              </Button>
            </Link>
            <Link href="/about" aria-label="About">
              <Button
                color="inherit"
                sx={{
                  display: { xs: "none", sm: "block" },
                  textTransform: "none",
                }}
              >
                About
              </Button>
            </Link>

            {isLoggedIn && (
              <div className="ms-5">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-label="user profile"
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.secondary",
                      width: 40,
                      height: 40,
                      fontWeight: 600,
                    }}
                  >
                    {user?.charAt(0).toUpperCase() || "U"}
                  </Avatar>
                </IconButton>

                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <Link href="/dashboard" passHref aria-label="Dashboard">
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Dashboard</ListItemText>
                    </MenuItem>
                  </Link>

                  <Link href="/create-blog" passHref aria-label="create blog">
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <AddIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Create Blog</ListItemText>
                    </MenuItem>
                  </Link>

                  <Divider />

                  <MenuItem onClick={handleLogout} aria-label="logout">
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" color="error" />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "error.main" }}>
                      Logout
                    </ListItemText>
                  </MenuItem>
                </Menu>
              </div>
            )}

            {!isLoggedIn && pathname !== "/login" && (
              <Link href="/login">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0F52BA",
                    display: { xs: "none", sm: "block" },
                  }}
                  aria-label="login"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
          <div className="sm:hidden">
            <IconButton
              onClick={toggleSidebar}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
