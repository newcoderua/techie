export const fetchGadgets = () => {
  return $.ajax({
    method: "GET",
    url: "/api/gadgets"
  })
}
