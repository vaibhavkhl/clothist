class CreateCostPreferences < ActiveRecord::Migration
  def change
    create_table :cost_preferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
