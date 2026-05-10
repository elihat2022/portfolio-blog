import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"posts">;
}

export default function BlogCard({ post }: Props) {
  return (
    <a href={`/blog/${post.id}`} className="card-link">
      <div className="card" style={{ cursor: "pointer" }}>
        <img
          className="card-img"
          src={post.data.imageUrl}
          alt={post.data.title}
        />
        <div className="card-content">
          <div className="tags-container">
            {post.data.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h3 style={{ color: "black" }}>{post.data.title}</h3>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
            {post.data.description}
          </p>
        </div>
        <div className="card-footer">
          <p className="date">{post.data.date}</p>
          <span className="read-more">Leer más</span>
        </div>
        <style>
          {`

            .card-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          flex: 1;
        }
          
            .card {
              box-sizing: border-box;
              width: 100%;
              height: 100%;
              flex: 1;
              position: relative; 
              padding: 0;
              border-radius: 12px;
              background: rgba(255, 255, 255, 0.9);
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              overflow: hidden;
              transition: all 0.4s ease-in-out;
            }
            .card:hover {
              box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.6);
              transform: translateY(-8px) scale(1.02);
            }
            .card-img {
              width: 100%;
              height: 160px;
              object-fit: cover;
              z-index: 0;
            }
            .card-content {
              color: #111;
              padding: 16px 20px 0 20px;
              position: relative;
              z-index: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              flex: 1;
              width: 100%;
              box-sizing: border-box;
            }
            .card-content h3 {
              margin: 0;
              font-size: 1.1rem;
              line-height: 1.3;
            }
            .card-content a {
              color: #3245ff;
              text-decoration: none;
              font-weight: 600;
              font-size: 0.95rem;
            }
            .card-content a:hover {
              text-decoration: underline;
            }

            .card-footer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 20px 20px 20px;
              margin-top: auto;
              width: 100%;
              box-sizing: border-box;
            }

            .date {
              margin: 0;
              font-size: 0.85rem;
              color: #666;
              font-weight: 500;
            }

            .read-more {
              margin: 0;
              background: white;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              text-indent: -9999px;
              position: relative;
              cursor: pointer;
              rotate: -45deg;
            }

             .read-more:hover {
              box-shadow: 0 4px 12px rgba(72, 92, 241, 0.79);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
           }

              .read-more::after {
                content: '→';
                text-indent: 0;
                position: absolute;
                color: black;
                font-size: 1.2rem;
              }

            .tags-container {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
              margin-bottom: 12px;
            }
            
            .tag {
              background: #90cd27;
              color: white;
              padding: 2px 10px;
              border-radius: 16px;
              font-size: 0.75rem;
              font-weight: 500;
            }
        `}
        </style>
      </div>
    </a>
  );
}
