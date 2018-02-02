class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.string :img_url, null: false
      t.string :video_url

      t.timestamps
    end

    add_index :recipes, :title
    add_index :recipes, :author_id, unique: true
  end
end
