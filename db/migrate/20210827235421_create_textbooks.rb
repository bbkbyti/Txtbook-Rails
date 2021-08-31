class CreateTextbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :textbooks do |t|
      t.string :title
      t.string :author
      t.string :edition
      t.string :ISBN
      t.string :img_url
      t.integer :price
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.string :other
      t.string :description

      t.timestamps
    end
  end
end
