import React from "react";
import CredentialCard from "./CredentialCard";

function CredentialPage() {
  return (
    <div className="h-full w-full flex bg-blue-300">
      <div className="bg-slate-100 m-auto">
        <CredentialCard />
      </div>
    </div>
  );
}

export default CredentialPage;
