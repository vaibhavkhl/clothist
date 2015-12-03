class CreateReturnedProductReasons < ActiveRecord::Migration
  def change
    create_table :returned_product_reasons do |t|
      t.string :size
      t.string :color
      t.string :price
      t.string :have_similar
      t.references :box_product, index: true

      t.timestamps null: false
    end
  end
end
