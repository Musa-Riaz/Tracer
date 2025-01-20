import React from "react";
import useScrollTop from "../hooks/use-scroll-stop";
import { cn } from "../lib/utils";
import Logo from "./Logo";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import axios from "axios";
import { setAuth, setUser } from "../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";


const Navbar = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const user  = useSelector((state: RootState) => state.user);
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const scrolled = useScrollTop();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/app/v1/auth/signup", {
        username,
        email,
        password,
      });
      if (res.data.success) {
        toast({
          title: "Success",
          description: "User has been registered successfully",
          variant: "success",
        });
        setOpen(false);
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        toast({
          title: "Error",
          description: "There was a problem signing in",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "There was a problem signing up",
        variant: "destructive",
      });
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/app/v1/auth/signin",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (res.data.success) {
        toast({
          title: "Success",
          description: "User has been logged in successfully",
          variant: "default",
        });
        dispatch(setAuth(true));
        dispatch(setUser(res.data.username));
        setOpen(false);
        setEmail("");
        setPassword("");
      } else {
        toast({
          title: "Error",
          description: "There was a problem signing in",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "There was a problem signing in",
        variant: "destructive",
      });
    }
  };

  const handleLogOut = async ()=> {
    try{
      const res = await axios.get("http://localhost:3000/app/v1/auth/signout", {withCredentials: true});
      if(res.data.success){
        toast({
          title: "Success",
          description: "User has been logged out successfully",
          variant: "default",
        });
        dispatch(setAuth(false));
        dispatch(setUser(""));
      }
    }
    catch(err){
      console.log(err);
      toast({
        title: "Error",
        description: "There was a problem logging out",
        variant: "destructive",
      });
    }
  }

  return (
    <div
      className={cn(
        "z-index bg-background dark:bg-[#161313] fixed top-0 flex items-center w-full p-6",
        scrolled && " border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {user?.isAuthorized ? (
          <div className="flex items-center gap-x-4">
            <p>{user.username}</p>
            <Button onClick={handleLogOut}>Logout</Button>
          </div>
        ) : (
          <>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <Button>Login</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription>
                    Please enter your credentials to login
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="flex flex-col gap-y-4 "
                  onSubmit={handleSignIn}
                >
                  <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit">Login</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button>Register</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register</DialogTitle>
                  <DialogDescription>
                    Please enter your credentials to register
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="flex flex-col gap-y-4 "
                  onSubmit={handleSignUp}
                >
                  <div className="flex flex-col gap-y-2">
                    <Label>Username</Label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit">Register</Button>
                </form>
              </DialogContent>
            </Dialog>
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
