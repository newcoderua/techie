class CreateGadgets < ActiveRecord::Migration[5.1]
  def change
    create_table :gadgets do |t|
      t.integer :user_id, null: false, index: true
      t.string :name
      t.integer :price
      t.integer :initial_price
      t.string :history_prices, array: true, default: []
      t.string :description
      t.string :condition

      t.timestamps
    end
  end
end
