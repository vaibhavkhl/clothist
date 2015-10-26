class CreateLeisurepreferences < ActiveRecord::Migration
  def change
    create_table :leisurepreferences do |t|
      t.string :image_name
      t.references :user, index: true

      t.timestamps
    end
  end
end
