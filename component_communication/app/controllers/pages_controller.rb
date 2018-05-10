class PagesController < ApplicationController
  def index
    flash[:notice] = 'Hello from Rails!'
  end
end
