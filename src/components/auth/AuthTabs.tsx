"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import LoginForm from "./login/LoginForm";
import RegisterForm from "./register/RegisterForm";

export default function AuthTabs() {
  return (
    <TabGroup>
      <TabList className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          className={({ selected }) =>
            `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
             ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
             ${
               selected
                 ? "bg-white shadow"
                 : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
             }`
          }
        >
          Login
        </Tab>
        <Tab
          className={({ selected }) =>
            `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
             ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
             ${
               selected
                 ? "bg-white shadow"
                 : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
             }`
          }
        >
          Register
        </Tab>
      </TabList>
      <TabPanels className="mt-2">
        <TabPanel className="rounded-xl bg-white p-3">
          <LoginForm />
        </TabPanel>
        <TabPanel className="rounded-xl bg-white p-3">
          <RegisterForm />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
