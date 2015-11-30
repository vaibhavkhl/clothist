class CreateWorkPreferences < ActiveRecord::Migration
  def change
    create_table :work_preferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
