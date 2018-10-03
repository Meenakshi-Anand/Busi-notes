class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :provider
      t.string :user_id
      t.string :name
      t.string :oauth_token
      t.datetime :oauth_expires_at

      t.timestamps
    end
  end
end
