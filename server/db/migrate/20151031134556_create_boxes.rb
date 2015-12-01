class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.datetime :delivery_date_requested
      t.datetime :delivery_date_actual
      t.string :return_day
      t.text :special_instructions
      t.decimal :total_cost, precision: 9, scale: 2
      t.decimal :products_bought_cost, precision: 9, scale: 2
      t.string :payment_method
      t.references :user, index: true

      t.timestamps
    end
  end
end
