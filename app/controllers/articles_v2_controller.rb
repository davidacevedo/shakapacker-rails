class ArticlesV2Controller < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Article.all
  end

  def show
    render json: Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created
    else
      render json: { errors: @article.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Article.find(params[:id]).destroy
  end

  private
    def article_params
      params.require(:article).permit(:title, :body)
    end
end
