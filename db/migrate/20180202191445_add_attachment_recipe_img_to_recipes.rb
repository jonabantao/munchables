class AddAttachmentRecipeImgToRecipes < ActiveRecord::Migration[5.1]
  def self.up
    change_table :recipes do |t|
      t.attachment :recipe_img
    end
  end

  def self.down
    remove_attachment :recipes, :recipe_img
  end
end
