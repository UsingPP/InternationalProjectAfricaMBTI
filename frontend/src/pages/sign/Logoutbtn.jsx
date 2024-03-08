import { Button } from "@mui/material";
import React from 'react'

function Logoutbtn() {
  function logout(){
    localStorage.clear()
    window.location.href = "/signin"
  }
  return (
    <div>
      <Button onClick={logout}>
        logout
      </Button>
    </div>
  )
}

export default Logoutbtn

