class CreateGamesPlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :games_players do |t|
      t.references :game, foreign_key: true
      t.references :player, foreign_key: true
      t.string :piece

      t.timestamps
    end
  end
end
