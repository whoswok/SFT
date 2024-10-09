import * as React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

const Select: React.FC<SelectProps> = ({ children, ...props }) => (
  <select {...props} className="border rounded px-3 py-2">{children}</select>
)

interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

const SelectValue: React.FC<SelectValueProps> = ({ children, ...props }) => (
  <span {...props}>{children}</span>
)

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SelectContent: React.FC<SelectContentProps> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode
}

const SelectItem: React.FC<SelectItemProps> = ({ children, ...props }) => (
  <option {...props}>{children}</option>
)

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }