import React, { useState } from 'react'

function Item() {
    const [item, setItem] = useState({
        id: "",
        name: "",
        checked: false
    });

    function handleInputChange(e) {
        setItem({...item, name: e.target.value});
    }

    function HandleSubmit(e) {
        e.preventDefault();
        setItem({...item, name: ""});
    }

  return (
    <div>Item</div>
  )
}

export default Item