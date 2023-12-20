import CodeIcon from '@mui/icons-material/Code';
import './Body.css';

const Body = () => {
    return (
        <div className="body-container">
            <div className="title">
                <span className="name">DANIEL GONZÁLEZ</span>
                <div className="developer">
                    <div className="category">
                        <div className="hover">
                            <p>Software</p>
                        </div>
                        <hr />
                    </div>
                    <div className="category">
                        <div className="icon-developer">
                            <CodeIcon sx={{ fontSize: 60, color: 'grey', marginLeft: '5%', marginRight: '5%' }} />
                            <div className="hover">
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-content">BODY</div>
        </div>
    );
};

export default Body;
