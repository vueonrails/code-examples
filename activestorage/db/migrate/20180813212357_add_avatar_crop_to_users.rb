class AddAvatarCropToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar_crop, :string
  end
end
