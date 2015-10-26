class CreateDislikepreferences < ActiveRecord::Migration
  def change
    create_table :dislikepreferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
