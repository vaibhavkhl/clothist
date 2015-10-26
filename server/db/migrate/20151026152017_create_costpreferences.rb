class CreateCostpreferences < ActiveRecord::Migration
  def change
    create_table :costpreferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
