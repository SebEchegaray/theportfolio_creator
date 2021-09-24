class Api::WorkApiController < ApplicationController
  def index
    work_experiences = Work.all
    render json: work_experiences
  end

  def create
    work_experience = Work.new(
      title: params[:title],
      company_name: params[:company_name],
      start_month: params[:start_month],
      start_year: params[:start_year],
      end_month: params[:end_month],
      end_year: params[:end_year],
      industry: params[:industry],
      description: params[:description]
    )

    work_experience.save

    render json: work_experience
  end
end