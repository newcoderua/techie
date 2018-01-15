class CreateGadgets < ActiveRecord::Migration[5.1]
  def change
    create_table :gadgets do |t|
      t.integer :user_id, null: false, index: true
      t.integer :name
      t.string :price
      t.string :description
      t.string :condition

      t.timestamps
    end
  end
end
