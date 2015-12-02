# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create(description: 'blue tshirt', original_price: '1000',
  sell_price: '700', brand: 'US Polo', feedback_required: true)
Product.create(description: 'black jeans', original_price: '1800',
  sell_price: '1800', brand: 'levis', feedback_required: true)
Product.create(description: 'white shirt', original_price: '1500',
  sell_price: '1200', brand: 'blackberry', feedback_required: true)
Product.create(description: 'brown chino', original_price: '1500',
  sell_price: '1500', brand: 'gap', feedback_required: true)
Product.create(description: 'black belt', original_price: '1000',
  sell_price: '700', brand: 'Armani', feedback_required: false)
Product.create(description: 'striped tie', original_price: '1000',
  sell_price: '700', brand: 'Gucci', feedback_required: false)


Box.create(delivery_date_requested: "2015-11-30T18:30:00.000Z", return_datetime: "2015-12-3T18:30:00.000Z",
  user_id: "1", box_products_attributes: [{product_id: "1"},
    {product_id: "2"},{product_id: "3"},{product_id: "4"},{product_id: "5"},{product_id: "6"}])
