"use client";
// import { Assignment } from "@/Types";
import Silder from "../Components/Silder"
import AssignmentDashboard from "@/Components/AssignmentDashboard";
// import { getAssignmentInfo } from "@/helper";
import { useEffect, useRef, useState } from "react";
import { AppStore, makeStore } from "@/lib/store"
// import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";

export default function Home() {

  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <main className="flex flex-row gap-4 min-h-screen min-w-screen overflow-hidden bg-gray-100">

      <Silder />
      <StoreProvider>
        <AssignmentDashboard />
      </StoreProvider>

    </main>
  );
}
