class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.datetime :delivery_date_requested
      t.datetime :delivery_date_actual
      t.datetime :return_datetime
      t.text :special_instructions
      t.decimal :total_cost, precision: 9, scale: 2
      t.decimal :products_bought_cost, precision: 9, scale: 2
      t.string :payment_method
      t.string :unique_identifier
      t.text :overall_feedback
      t.boolean :processed
      t.references :user, index: true

      t.timestamps
    end
  end
end
