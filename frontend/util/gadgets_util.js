export const fetchGadgets = () => {
  return $.ajax({
    method: "GET",
    url: "/api/gadgets"
  })
}

export const createGadget = (gadget) => {
  // debugger
  return ($.ajax({
    method: "POST",
    url: "api/gadgets",
    data: { gadget },
    })
  )
}
