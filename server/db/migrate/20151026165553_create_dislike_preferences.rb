class CreateDislikePreferences < ActiveRecord::Migration
  def change
    create_table :dislike_preferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
