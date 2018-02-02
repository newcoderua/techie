class Api::GadgetsController < ApplicationController
  def index
    gadgets = Gadget.all
    if(current_user)
      gadgets = gadgets.where(user_id: current_user.id)
      @gadgets = gadgets.reverse
      return @gadgets
    end
    # debugger
  end

  def create
    # debugger
    @gadget = Gadget.new(gadget_params)
    @gadget.user_id = current_user.id
    if @gadget.save
      render :show
    else
      render json: @gadget.errors.full_messages, status: 422
    end
  end

  def show
    @gadget = Gadget.find(params[:id])
  end

  def destroy
    # debugger
    @gadget = Gadget.find(params[:id])
    if @gadget
      @gadget.destroy
      render :show
    else
      render json: { message: "Invalid reservation", status: 404 }
    end

  end

  private

  def gadget_params
    params.require(:gadget).permit(:user_id, :name, :price, :description,
    :initial_price, :history_prices, :manufacturer, :color, :size,
    :features, :image)
  end
end
