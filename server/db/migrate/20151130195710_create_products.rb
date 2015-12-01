class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :custom_id
      t.integer :order_id
      t.integer :unique_id
      t.string :apparel_category
      t.string :size
      t.string :source
      t.string :seller
      t.string :brand
      t.text :description
      t.decimal :original_price, precision: 8, scale: 2
      t.decimal :cost, precision: 8, scale: 2
      t.decimal :discount, precision: 8, scale: 2
      t.string :price_range
      t.date :order_date
      t.date :receive_date
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
