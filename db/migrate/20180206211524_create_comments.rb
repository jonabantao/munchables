class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :commenter_id, null: false
      t.integer :recipe_id, null: false

      t.timestamps
    end

    add_index :comments, :commenter_id
    add_index :comments, :recipe_id
  end
end
