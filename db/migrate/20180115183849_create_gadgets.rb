class CreateGadgets < ActiveRecord::Migration[5.1]
  def change
    create_table :gadgets do |t|
      t.integer :user_id, null: false, index: true
      t.string :name
      t.string :price
      t.string :initial_price
      t.string :history_prices, array: true, default: []
      t.string :description
      t.string :manufacturer
      t.string :color
      t.string :size
      t.string :features, array: true, default: []
      t.string :image

      t.timestamps
    end
  end
end
