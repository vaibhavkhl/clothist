class CreateBoxProducts < ActiveRecord::Migration
  def change
    create_table :box_products do |t|
      t.references :box, index: true
      t.references :product, index: true
      t.boolean :accepted

      t.timestamps null: false
    end
  end
end
