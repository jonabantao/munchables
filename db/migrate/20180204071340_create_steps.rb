class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :order, null: false
      t.integer :recipe_id, null: false

      t.timestamps
    end

    add_index :steps, :order
    add_index :steps, :recipe_id
  end
end
