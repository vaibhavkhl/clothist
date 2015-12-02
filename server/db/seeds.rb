# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create(description: 'blue tshirt', original_price: '1000', apparel_category: 'tee')
Product.create(description: 'red denim', original_price: '2000')
Product.create(description: 'blue shirt', original_price: '3000')
Product.create(description: 'black trouser', original_price: '4000')
Product.create(description: 'white jacket', original_price: '5000')
Product.create(description: 'black tshirt', original_price: '6000')
Product.create(description: 'blue tshirt', original_price: '7000')
Product.create(description: 'blue tshirt', original_price: '8000')
Product.create(description: 'blue tshirt', original_price: '9000')
Product.create(description: 'blue tshirt', original_price: '10000')
Product.create(description: 'blue tshirt', original_price: '1000')

Box.create(delivery_date_requested: "2015-11-30T18:30:00.000Z", return_day: "1",
  user_id: "1", box_products_attributes: [{product_id: "1"},
    {product_id: "2"},{product_id: "3"}])

Box.create(delivery_date_requested: "2015-11-30T18:30:00.000Z", return_day: "1",
  user_id: "1", box_products_attributes: [{product_id: "4"},
    {product_id: "5"},{product_id: "6"}])
