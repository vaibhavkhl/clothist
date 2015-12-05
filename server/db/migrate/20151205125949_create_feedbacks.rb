class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.text :suggestion
      t.string :excites
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
