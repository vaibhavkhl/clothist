class CreatePatternsdislikepreferences < ActiveRecord::Migration
  def change
    create_table :patternsdislikepreferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
