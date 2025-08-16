export default interface Inputprops{
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string; 
    htmlFor: string;
    labelcontent?: string;
    classNameContainer?: string;
}