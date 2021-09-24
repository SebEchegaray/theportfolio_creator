class Api::EduApiController < ApplicationController
  def index
    educations = Education.all
    render json: educations
  end

  def create
    education = Education.new(
      institution_name: params[:institution_name],
      start_month: params[:start_month],
      start_year: params[:start_year],
      end_month: params[:end_month],
      end_year: params[:end_year],
      degree: params[:degree],
      field: params[:field]
    )

    education.save

    render json: education
  end
end