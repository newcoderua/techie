@gadgets.each do |gadget|
  json.set! gadget.id do
    json.partial! 'gadget', gadget: gadget
  end
end
