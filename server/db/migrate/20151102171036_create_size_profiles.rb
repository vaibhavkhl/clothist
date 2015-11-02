class CreateSizeProfiles < ActiveRecord::Migration
  def change
    create_table :size_profiles do |t|
      t.string :tshirt_size
      t.string :tshirt_brand
      t.string :shirt_size
      t.string :shirt_brand
      t.string :shirt_fit
      t.string :trouser_size
      t.string :trouser_brand
      t.string :trouser_fit
      t.string :height
      t.string :weight
      t.string :skin_color
      t.references :user, index: true

      t.timestamps
    end
  end
end
